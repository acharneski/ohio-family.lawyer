variable "domain_name" {
      description = "The full domain name for the website"
      type        = string
      default     = "ohio-family.lawyer"
    }

    variable "hosted_zone_id" {
      description = "Route53 hosted zone ID"
      type        = string
      default     = "Z04941121H8BJD160A8LX"
    }

    variable "hosted_zone_name" {
      description = "Route53 hosted zone name"
      type        = string
      default     = "ohio-family.lawyer"
    }

    variable "aws_region" {
      description = "Primary AWS region for resources"
      type        = string
      default     = "us-east-1"
    }