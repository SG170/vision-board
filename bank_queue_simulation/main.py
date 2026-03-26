import tkinter as tk
from tkinter import messagebox
from tkinter import ttk
import random
import matplotlib.pyplot as plt
from tabulate import tabulate

def run_simulation(num_customers):
    """
    Simulates a bank queue using First Come First Serve (FCFS).
    This is analogous to FCFS CPU Scheduling in OS/CAO.
    """
    if num_customers <= 0:
        return None
    
    customers = []
    current_arrival = 0
    
    # Generate random data for each customer
    for i in range(1, num_customers + 1):
        if i == 1:
            # First customer arrives at time 0
            arrival_time = 0
        else:
            # Subsequent customers arrive 1 to 5 time units after the previous one
            arrival_time = current_arrival + random.randint(1, 5) 
            
        current_arrival = arrival_time
        
        # It takes the cashier (CPU) 2 to 10 time units to serve the customer (process)
        service_time = random.randint(2, 10) 
        
        customers.append({
            "id": i,
            "arrival_time": arrival_time,
            "service_time": service_time
        })
        
    # --- FCFS Scheduling Logic ---
    current_time = 0
    results = []
    
    for customer in customers:
        # If the cashier is idle, time skips to when the customer arrives
        if current_time < customer["arrival_time"]:
            current_time = customer["arrival_time"]
            
        start_time = current_time
        end_time = start_time + customer["service_time"]
        
        # Waiting Time = Start Time - Arrival Time
        waiting_time = start_time - customer["arrival_time"]
        
        # Turnaround Time = End Time - Arrival Time
        # It represents total time spent in the bank (queue + service)
        turnaround_time = end_time - customer["arrival_time"]
        
        results.append({
            "Customer": f"C{customer['id']}",
            "Arrival Time": customer["arrival_time"],
            "Service Time": customer["service_time"],
            "Start Time": start_time,
            "End Time": end_time,
            "Waiting Time": waiting_time,
            "Turnaround Time": turnaround_time
        })
        
        # Update current time to when the cashier finishes with this customer
        current_time = end_time
        
    return results

def on_run_clicked():
    """
    Handles the 'Run Simulation' button click event.
    """
    try:
        # Get input from text field
        num_customers = int(entry_customers.get())
        if num_customers <= 0:
            messagebox.showerror("Error", "Please enter a positive number greater than 0.")
            return
            
        # Run the simulation function
        results = run_simulation(num_customers)
        
        # 1. Update the Treeview (Table) in the GUI
        # Clear old data
        for row in tree.get_children():
            tree.delete(row)
            
        # Insert new data
        for r in results:
            tree.insert("", tk.END, values=(
                r["Customer"], 
                r["Arrival Time"], 
                r["Service Time"], 
                r["Start Time"], 
                r["End Time"], 
                r["Waiting Time"], 
                r["Turnaround Time"]
            ))
        
        # Calculate averages
        avg_wait = sum(r["Waiting Time"] for r in results) / num_customers
        avg_turnaround = sum(r["Turnaround Time"] for r in results) / num_customers
        
        # Calculate CPU Utilization
        total_service_time = sum(r["Service Time"] for r in results)
        total_time = results[-1]["End Time"] if results else 0
        cpu_utilization = (total_service_time / total_time * 100) if total_time > 0 else 0
        
        # Update summary labels
        avg_wait_label.config(text=f"Average Waiting Time: {avg_wait:.2f} units")
        avg_turn_label.config(text=f"Average Turnaround Time: {avg_turnaround:.2f} units")
        cpu_util_label.config(text=f"CPU Utilization: {cpu_utilization:.2f}%")
        
        # 2. Display the Graph using matplotlib
        customer_ids = [r["Customer"] for r in results]
        waiting_times = [r["Waiting Time"] for r in results]
        
        plt.figure(figsize=(8, 5)) # Create a window for the graph
        plt.bar(customer_ids, waiting_times, color='#4a90e2', edgecolor='black')
        
        # Add labels and title
        plt.title('Customer vs Waiting Time\n(FCFS CPU Scheduling Analogy)')
        plt.xlabel('Customer (Analogous to Process)')
        plt.ylabel('Waiting Time')
        plt.grid(axis='y', linestyle='--', alpha=0.7)
        
        # Show the plot
        plt.show()
        
    except ValueError:
        # If user types something that isn't an integer
        messagebox.showerror("Error", "Please enter a valid whole number.")

# ==========================================
# --- Advanced GUI Setup (Tkinter Frontend) ---
# ==========================================

# Create the main window
root = tk.Tk()
root.title("Bank Queue Simulation - Built with Python")
root.geometry("700x500") # Larger window to fit the table
root.configure(bg="#f4f4f9") # Modern light background color

# Style configuration for ttk elements
style = ttk.Style()
style.theme_use('clam') # 'clam' looks a bit more modern than default
style.configure("Treeview.Heading", font=('Helvetica', 10, 'bold'), background="#d0d0e1")
style.configure("Treeview", font=('Helvetica', 10), rowheight=25)

# --- Top Frame (Input Area) ---
top_frame = tk.Frame(root, bg="#f4f4f9")
top_frame.pack(pady=20)

title_label = tk.Label(top_frame, text="Bank Queue Simulation", font=("Arial", 16, "bold"), bg="#f4f4f9", fg="#333333")
title_label.grid(row=0, column=0, columnspan=3, pady=(0, 15))

label = tk.Label(top_frame, text="Number of Customers:", font=("Arial", 12), bg="#f4f4f9")
label.grid(row=1, column=0, padx=5)

entry_customers = tk.Entry(top_frame, font=("Arial", 12), width=10, justify="center")
entry_customers.grid(row=1, column=1, padx=5)

run_button = tk.Button(top_frame, text="  Run Simulation  ", command=on_run_clicked, 
                       font=("Arial", 11, "bold"), bg="#4CAF50", fg="white", 
                       activebackground="#45a049", activeforeground="white", relief=tk.FLAT, padx=10, pady=2)
run_button.grid(row=1, column=2, padx=10)

# --- Middle Frame (Table Area) ---
table_frame = tk.Frame(root, bg="#f4f4f9")
table_frame.pack(pady=10, padx=20, fill=tk.BOTH, expand=True)

# Define columns
columns = ("Customer", "Arrival", "Service", "Start", "End", "Wait", "Turnaround")
tree = ttk.Treeview(table_frame, columns=columns, show="headings")

# Format columns
for col in columns:
    # Set display names for the columns
    header_text = col
    if col == "Wait": header_text = "Waiting Time"
    elif col == "Arrival": header_text = "Arrival Time"
    elif col == "Service": header_text = "Service Time"
    elif col == "Start": header_text = "Start Time"
    elif col == "End": header_text = "End Time"
    elif col == "Turnaround": header_text = "Turnaround Time"
    
    tree.heading(col, text=header_text)
    tree.column(col, anchor=tk.CENTER, width=90)

# Add a scrollbar to the table
scrollbar = ttk.Scrollbar(table_frame, orient=tk.VERTICAL, command=tree.yview)
tree.configure(yscroll=scrollbar.set)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

# --- Bottom Frame (Summary Area) ---
bottom_frame = tk.Frame(root, bg="#f4f4f9")
bottom_frame.pack(pady=15, fill=tk.X)

# Center the bottom frame items by using expand and grid or packing left
avg_wait_label = tk.Label(bottom_frame, text="Average Waiting Time: --", font=("Arial", 12, "bold"), bg="#f4f4f9", fg="#d9534f")
avg_wait_label.pack(side=tk.LEFT, expand=True)

cpu_util_label = tk.Label(bottom_frame, text="CPU Utilization: --", font=("Arial", 12, "bold"), bg="#f4f4f9", fg="#5cb85c")
cpu_util_label.pack(side=tk.LEFT, expand=True)

avg_turn_label = tk.Label(bottom_frame, text="Average Turnaround Time: --", font=("Arial", 12, "bold"), bg="#f4f4f9", fg="#5bc0de")
avg_turn_label.pack(side=tk.LEFT, expand=True)

# Start the application loop
if __name__ == "__main__":
    print("Welcome to the Bank Queue Simulation!")
    root.mainloop()
