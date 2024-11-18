import json
import requests
import os
from dotenv import load_dotenv

load_dotenv()
DISCORD_WEBHOOK_URL = os.getenv("DISCORD_WEBHOOK_URL")

def lambda_handler(event, context):
    message = {
        "content": "High CPU utilization detected on EC2 instance!"
    }
    response = requests.post(DISCORD_WEBHOOK_URL, json=message)
    
    if response.status_code == 204:
        return {
            'statusCode': 200,
            'body': json.dumps('Notification sent to Discord successfully!')
        }
    else:
        return {
            'statusCode': response.status_code,
            'body': json.dumps('Failed to send notification')
        }