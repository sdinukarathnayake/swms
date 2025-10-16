package com.swms.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class WasteCollectionStaffRequest {
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;
    
    @NotBlank(message = "Phone is required")
    private String phone;
    
    @NotBlank(message = "Password is required")
    private String password;
    
    @NotBlank(message = "Employee ID is required")
    private String employeeId;
    
    @NotBlank(message = "Route area is required")
    private String routeArea;

    // Default constructor
    public WasteCollectionStaffRequest() {
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getPassword() {
        return password;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String getRouteArea() {
        return routeArea;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public void setRouteArea(String routeArea) {
        this.routeArea = routeArea;
    }
}