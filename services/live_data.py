import requests

def get_weather_data(lat, lon):

    url = "https://api.openweathermap.org/data/2.5/weather"
    API_KEY = "YOUR_API_KEY"

    params = {
        "lat": lat,
        "lon": lon,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(url, params=params)
    data = response.json()

    # 🔴 SAFE CHECK (IMPORTANT)
    if "main" not in data:
        print("Weather API ERROR:", data)

        # fallback values (so system never breaks)
        return {
            "temperature": 25,
            "humidity": 60,
            "rainfall": 0
        }

    return {
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "rainfall": data.get("rain", {}).get("1h", 0)
    }