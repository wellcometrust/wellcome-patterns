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