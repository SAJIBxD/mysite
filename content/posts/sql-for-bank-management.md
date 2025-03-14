---
title: "Sql for Bank Management"
date: 2025-02-24T22:48:42+06:00
tags: [sql, database, tools]
---

Table Creation Commands:

```sql
CREATE TABLE Account (
    branch_name VARCHAR(15) NOT NULL,
    account_number VARCHAR(10),
    balance NUMERIC(8),
    PRIMARY KEY(account_number),
    CHECK (balance >= 0)
);

CREATE TABLE Branch (
    branch_name VARCHAR(15) NOT NULL,
    branch_city VARCHAR(30),
    assets NUMERIC(8),
    PRIMARY KEY(branch_name),
    CHECK (assets >= 0)
);

CREATE TABLE Customer (
    customer_name VARCHAR(20) NOT NULL,
    cust_street VARCHAR(30),
    cust_city VARCHAR(30),
    PRIMARY KEY(customer_name)
);

CREATE TABLE Depositor (
    customer_name VARCHAR(20) NOT NULL,
    account_number VARCHAR(10) NOT NULL,
    PRIMARY KEY (customer_name, account_number)
);

CREATE TABLE Loan (
    branch_name VARCHAR(15) NOT NULL,
    loan_number VARCHAR(5),
    amount NUMERIC(8),
    PRIMARY KEY (loan_number),
    CHECK (amount >= 0)
);

CREATE TABLE Borrower (
    customer_name VARCHAR(20) NOT NULL,
    loan_number VARCHAR(5) NOT NULL,
    PRIMARY KEY (customer_name, loan_number)
);

```

Data Insertion Commands:

```sql
Insert INTO Account VALUES ('Downtown', 'A-101', 500);
Insert INTO Account VALUES ('Mianus', 'A-215', 700);
Insert INTO Account VALUES ('Perryridge', 'A-102', 400);
Insert INTO Account VALUES ('Roundhill', 'A-305', 350);
Insert INTO Account VALUES ('Brighton', 'A-201', 900);
Insert INTO Account VALUES ('Redwood', 'A-222', 700);
Insert INTO Account VALUES ('Brighton', 'A-217', 750);

Insert INTO Branch VALUES ('Downtown', 'Brooklyn', 900000);
Insert INTO Branch VALUES ('Redwood', 'Palo Alto', 210000);
Insert INTO Branch VALUES ('Perryridge', 'Horseneck', 170000);
Insert INTO Branch VALUES ('Mianus', 'Horseneck', 40000);
Insert INTO Branch VALUES ('Roundhill', 'Horseneck', 800000);
Insert INTO Branch VALUES ('Pownal', 'Bennignton', 30000);
Insert INTO Branch VALUES ('North Town', 'Rye', 370000);
Insert INTO Branch VALUES ('Brighton', 'Brooklyn', 710000);

Insert INTO Customer VALUES ('Jones', 'Main', 'Harrison');
Insert INTO Customer VALUES ('Smith', 'North', 'Rye');
Insert INTO Customer VALUES ('Hayes', 'Main', 'Harrison');
Insert INTO Customer VALUES ('Curry', 'North', 'Rye');
Insert INTO Customer VALUES ('Lindsay', 'Park', 'Pittsfield');
Insert INTO Customer VALUES ('Turner', 'Putnam', 'Stamford');
Insert INTO Customer VALUES ('Williams', 'Nassau', 'Princeton');
Insert INTO Customer VALUES ('Adams', 'Spring', 'Pittsfield');
Insert INTO Customer VALUES ('Johnson', 'Alma', 'Palo Alto');
Insert INTO Customer VALUES ('Glenn', 'Sand Hill', 'Wood Side');
Insert INTO Customer VALUES ('Brooks', 'Senator', 'Brooklyn');
Insert INTO Customer VALUES ('Green', 'Walnut', 'Stamford');

Insert INTO Depositor VALUES ('Johnson', 'A-101');
Insert INTO Depositor VALUES ('Smith', 'A-215');
Insert INTO Depositor VALUES ('Hayes', 'A-102');
Insert INTO Depositor VALUES ('Turner', 'A-305');
Insert INTO Depositor VALUES ('Johnson', 'A-201');
Insert INTO Depositor VALUES ('Jones', 'A-217');
Insert INTO Depositor VALUES ('Lindsay', 'A-222');

Insert INTO Loan VALUES ('L-17', 'Downtown', 1000);
Insert INTO Loan VALUES ('L-23', 'Redwood', 2000);
Insert INTO Loan VALUES ('L-15', 'Perryridge', 1500);
Insert INTO Loan VALUES ('L-14', 'Downtown', 1500);
Insert INTO Loan VALUES ('L-93', 'Mianus', 500);
Insert INTO Loan VALUES ('L-11', 'Roundhill', 900);
Insert INTO Loan VALUES ('L-16', 'Perryridge', 1300);

Insert INTO Borrower VALUES ('Jones', 'L-17');
Insert INTO Borrower VALUES ('Smith', 'L-23');
Insert INTO Borrower VALUES ('Hayes', 'L-15');
Insert INTO Borrower VALUES ('Jackson', 'L-14');
Insert INTO Borrower VALUES ('Curry', 'L-93');
Insert INTO Borrower VALUES ('Smith', 'L-11');
Insert INTO Borrower VALUES ('Williams', 'L-16');
Insert INTO Borrower VALUES ('Adams', 'L-16');

```
