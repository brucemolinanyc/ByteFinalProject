import urllib
import requests 
import json 

api_key_votesmart = 'e6c9d393d6cf259456bcb71e26922bcd'
votesmart_endpoint = 'http://api.votesmart.org/'
# http://api.votesmart.org/CandidateBio.getBio?key=<your_key>&candidateId=9490

api_key_google_civic_data = 'AIzaSyAGlkBc9s481EmabJcY3xA3TdLYpruUAHI'
google_endpoint = 'https://www.googleapis.com/civicinfo/v2'
# example =   https://www.googleapis.com/civicinfo/v2/elections?key=<YOUR_API_KEY>
# curl_example = curl "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAGlkBc9s481EmabJcY3xA3TdLYpruUAHI&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS"
# partials = https://www.googleapis.com/demo/v1?key=YOUR-API-KEY&fields=kind,items(title,characteristics/length)
# partials doc example https://developers.google.com/civic-information/docs/v2/performance

def request():
    pass
