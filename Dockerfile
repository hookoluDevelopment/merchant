# ------------------------------------------------------------------------------
# Stage 1: Build the application with Maven & Java 8
# ------------------------------------------------------------------------------
FROM maven:3.8.8-eclipse-temurin-8 AS build
WORKDIR /app

# Copy pom.xml and download dependencies to leverage Docker layer caching
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code and build the package
COPY src ./src
RUN mvn package -DskipTests

# ------------------------------------------------------------------------------
# Stage 2: Create lightweight runtime container
# ------------------------------------------------------------------------------
FROM eclipse-temurin:8-jre-alpine
WORKDIR /app

# Copy built JAR from stage 1
COPY --from=build /app/target/*.jar app.jar

# Expose default Spring Boot port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]