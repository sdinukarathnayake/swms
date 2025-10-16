package com.swms.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.swms.repository")
@EnableMongoAuditing
public class MongoConfig {
    // Additional MongoDB configurations
}