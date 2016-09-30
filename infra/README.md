# Infrastructure

We are using [terraform](https://terraform.io) to:
* Create a bucket where our website will live
* Create a circle user that can write to that bucket.

You should just be able to run:
    
    terraform apply
    
__⚡ Be aware__ that if you do this you will have to update the
[cicleci aws config]((https://circleci.com/gh/wellcometrust/web-platform/edit#aws).) with the new config.

That is all.
