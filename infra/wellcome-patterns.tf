variable "circle_user" {}

provider "aws" {
  region     = "eu-west-1"
}

resource "aws_s3_bucket" "wellcome_patterns" {
  bucket = "patterns.wellcome.ac.uk"
  acl = "public-read"
  policy = "${file("website-bucket-policy.json")}"

  website {
    index_document = "index.html"
  }
}

resource "aws_iam_user_policy" "website_bucket_write" {
  name = "website-bucket-write"
  user = "${aws_iam_user.circle_user.id}"
  policy = "${file("write-bucket-policy.json")}"
}

resource "aws_iam_access_key" "circle_user" {
  user = "${aws_iam_user.circle_user.name}"
}

resource "aws_iam_user" "circle_user" {
  name = "${var.circle_user}"
  force_destroy = true
}

output "circle_key" {
  value = "${aws_iam_access_key.circle_user.id}"
}

output "circle_secret" {
  value = "${aws_iam_access_key.circle_user.secret}"
}

