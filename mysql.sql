# Connect to mysql instance
/usr/local/mysql/bin/mysql -h localhost -uroot -p'somepassword'

# Create user
CREATE USER 'kenzan'@'%' IDENTIFIED BY 'temp123';
GRANT ALL PRIVILEGES ON *.* TO 'kenzan'@'%' IDENTIFIED BY "temp123";

# Create database
CREATE DATABASE kenzan
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;

# Use db
use kenzan;

# Create table
create table employee (
    employeeId int not null auto_increment primary key,
    employeeFirstName varchar(20) not null,
    employeeMiddleInitial varchar(1),
    employeeLastName varchar(20) not null,
    employeeDateOfBirth date not null,
    employeeDateOfEmployment date not null,
    employeeStatus enum("ACTIVE", "INACTIVE") not null default "ACTIVE"
);

# Create view
create view vemployee as select * from employee;

# Insert some data
insert into employee (employeeFirstName, employeeMiddleInitial, employeeLastName, employeeDateOfBirth, employeeDateOfEmployment) values('Carlin', '', 'Weirick', '19900101', '20150101');
insert into employee (employeeFirstName, employeeMiddleInitial, employeeLastName, employeeDateOfBirth, employeeDateOfEmployment) values('Cynthia', 'J', 'Aguilar', '19900101', '20150101');
