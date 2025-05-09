from flask import Flask, request, render_template, jsonify
import numpy as np
import joblib

# Creating Flask app
app = Flask(__name__)

# Load the model and scaler
model = joblib.load("improved_model.pkl")
scaler = joblib.load('improved_scaler.pkl')

# Crop requirements based on biological constraints
CROP_REQUIREMENTS = {
    "rice": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 1000, "rainfall_max": 2500,
        "humidity_min": 60, "humidity_max": 100,
        "ph_min": 5, "ph_max": 7.5
    },
    "maize": {
        "temp_min": 18, "temp_max": 32,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 80,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "jute": {
        "temp_min": 24, "temp_max": 37,
        "rainfall_min": 1500, "rainfall_max": 2500,
        "humidity_min": 60, "humidity_max": 90,
        "ph_min": 6, "ph_max": 7.5
    },
    "cotton": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1100,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 5.5, "ph_max": 8.5
    },
    "coconut": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 1000, "rainfall_max": 3000,
        "humidity_min": 70, "humidity_max": 90,
        "ph_min": 5, "ph_max": 8
    },
    "papaya": {
        "temp_min": 21, "temp_max": 33,
        "rainfall_min": 1000, "rainfall_max": 2000,
        "humidity_min": 50, "humidity_max": 80,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "orange": {
        "temp_min": 13, "temp_max": 35,
        "rainfall_min": 1000, "rainfall_max": 2000,
        "humidity_min": 50, "humidity_max": 80,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "apple": {
        "temp_min": 7, "temp_max": 25,
        "rainfall_min": 800, "rainfall_max": 1600,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "muskmelon": {
        "temp_min": 18, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "watermelon": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "grapes": {
        "temp_min": 15, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "mango": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 1000, "rainfall_max": 2000,
        "humidity_min": 50, "humidity_max": 80,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "banana": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 1000, "rainfall_max": 2500,
        "humidity_min": 60, "humidity_max": 90,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "pomegranate": {
        "temp_min": 15, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 5.5, "ph_max": 7.5
    },
    "lentil": {
        "temp_min": 15, "temp_max": 30,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "blackgram": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "mungbean": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "mothbeans": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "pigeonpeas": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "kidneybeans": {
        "temp_min": 20, "temp_max": 35,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "chickpea": {
        "temp_min": 15, "temp_max": 30,
        "rainfall_min": 500, "rainfall_max": 1000,
        "humidity_min": 40, "humidity_max": 70,
        "ph_min": 6, "ph_max": 7.5
    },
    "coffee": {
        "temp_min": 15, "temp_max": 30,
        "rainfall_min": 1500, "rainfall_max": 2500,
        "humidity_min": 60, "humidity_max": 90,
        "ph_min": 5, "ph_max": 6.5
    }
}

def validate_crop(crop, input_data):
    """Check if crop is suitable for given conditions"""
    req = CROP_REQUIREMENTS.get(crop.lower(), {})
    if not req:
        return True  # No requirements defined
    
    checks = [
        input_data['Temperature'] >= req.get('temp_min', 0),
        input_data['Temperature'] <= req.get('temp_max', 100),
        input_data['Rainfall'] >= req.get('rainfall_min', 0),
        input_data['Rainfall'] <= req.get('rainfall_max', 5000),
        input_data['Humidity'] >= req.get('humidity_min', 0),
        input_data['Humidity'] <= req.get('humidity_max', 100),
        input_data['Ph'] >= req.get('ph_min', 0),
        input_data['Ph'] <= req.get('ph_max', 14)
    ]
    return all(checks)

def get_fallback_recommendation(N, P, K, temp, humidity, ph, rainfall):
    """Provide recommendations when model fails or conditions are extreme"""
    # Extreme dry/hot conditions
    if rainfall < 50 and temp > 40:
        return [('pearl_millet', 0.95), ('sorghum', 0.85), ('prickly_pear', 0.75)]
    
    # Very wet conditions
    elif rainfall > 2000:
        return [('rice', 0.95), ('taro', 0.85), ('water_spinach', 0.75)]
    
    # Acidic soil
    elif ph < 5:
        return [('tea', 0.95), ('blueberries', 0.85), ('potatoes', 0.75)]
    
    # Alkaline soil
    elif ph > 8.5:
        return [('alfalfa', 0.95), ('asparagus', 0.85), ('spinach', 0.75)]
    
    # Low nutrient soil
    elif N < 20 and P < 20 and K < 20:
        return [('pearl_millet', 0.95), ('sorghum', 0.85), ('cowpea', 0.75)]
    
    # Default fallback
    return [('maize', 0.8), ('beans', 0.7), ('wheat', 0.6)]

# Dictionary to map prediction to crop
crop_dict = {
    "rice": "Rice",
    "maize": "Maize",
    "jute": "Jute",
    "cotton": "Cotton",
    "coconut": "Coconut",
    "papaya": "Papaya",
    "orange": "Orange",
    "apple": "Apple",
    "muskmelon": "Muskmelon",
    "watermelon": "Watermelon",
    "grapes": "Grapes",
    "mango": "Mango",
    "banana": "Banana",
    "pomegranate": "Pomegranate",
    "lentil": "Lentil",
    "blackgram": "Blackgram",
    "mungbean": "Mungbean",
    "mothbeans": "Mothbeans",
    "pigeonpeas": "Pigeonpeas",
    "kidneybeans": "Kidneybeans",
    "chickpea": "Chickpea",
    "coffee": "Coffee"
}

# Define crop groupings based on similarity
crop_groups = {
    "cereals": ["rice", "maize"],
    "fibers": ["jute", "cotton"],
    "fruits": ["coconut", "papaya", "orange", "apple", "muskmelon", "watermelon", "grapes", "mango", "banana", "pomegranate"],
    "pulses": ["lentil", "blackgram", "mungbean", "mothbeans", "pigeonpeas", "kidneybeans", "chickpea"],
    "beverages": ["coffee"]
}

# Function to get the group of a crop
def get_crop_group(crop):
    for group, crops in crop_groups.items():
        if crop in crops:
            return group
    return None

# Function to check if input values are extreme
def check_extreme_values(N, P, K, temperature, humidity, ph, rainfall):
    warnings = []
    
    # Check nutrients
    if N < 10 or N > 150:
        warnings.append(f"Nitrogen level ({N}) is {'too low' if N < 10 else 'too high'} (normal range: 10-150)")
    if P < 10 or P > 150:
        warnings.append(f"Phosphorus level ({P}) is {'too low' if P < 10 else 'too high'} (normal range: 10-150)")
    if K < 10 or K > 150:
        warnings.append(f"Potassium level ({K}) is {'too low' if K < 10 else 'too high'} (normal range: 10-150)")
    
    # Check climate conditions
    if temperature < 10 or temperature > 40:
        warnings.append(f"Temperature ({temperature}°C) is {'too low' if temperature < 10 else 'too high'} (normal range: 10-40°C)")
    if humidity < 20 or humidity > 90:
        warnings.append(f"Humidity ({humidity}%) is {'too low' if humidity < 20 else 'too high'} (normal range: 20-90%)")
    if ph < 4 or ph > 9:
        warnings.append(f"pH level ({ph}) is {'too acidic' if ph < 4 else 'too alkaline'} (normal range: 4-9)")
    if rainfall < 20 or rainfall > 300:
        warnings.append(f"Rainfall ({rainfall}mm) is {'too low' if rainfall < 20 else 'too high'} (normal range: 20-300mm)")
    
    return warnings

# Function to get top 3 crop recommendations
def get_top_three_recommendations(prediction, probabilities):
    # Get the indices of the 3 highest probabilities
    top_indices = np.argsort(probabilities)[-3:][::-1]
    
    # Get the corresponding crops and probabilities
    top_crops = []
    for idx in top_indices:
        crop = model.classes_[idx]
        confidence = probabilities[idx] * 100
        group = get_crop_group(crop)
        top_crops.append({
            "crop_name": crop_dict.get(crop, crop),
            "confidence": round(confidence, 2),
            "group": group
        })
    
    return top_crops

# Function to engineer features
def engineer_features(X):
    # Handle both single samples and multiple samples
    if len(X.shape) == 1:
        X = X.reshape(1, -1)
    
    # Extract features
    N = X[:, 0]
    P = X[:, 1]
    K = X[:, 2]
    temp = X[:, 3]
    humidity = X[:, 4]
    ph = X[:, 5]
    rainfall = X[:, 6]
    
    # Nutrient ratios (with safety checks)
    N_P = np.where(P != 0, N/P, 0)
    N_K = np.where(K != 0, N/K, 0)
    P_K = np.where(K != 0, P/K, 0)
    
    # Climate interactions
    temp_humidity = temp * humidity
    temp_rainfall = temp * rainfall
    
    # Nutrient balance
    nutrient_sum = N + P + K
    nutrient_balance = abs(N - P) + abs(P - K) + abs(K - N)
    
    # Extreme value indicators
    extreme_temp = np.where((temp < 10) | (temp > 40), 1, 0)
    extreme_humidity = np.where((humidity < 20) | (humidity > 90), 1, 0)
    extreme_ph = np.where((ph < 4) | (ph > 9), 1, 0)
    extreme_rainfall = np.where((rainfall < 20) | (rainfall > 300), 1, 0)
    
    # Combine all features
    engineered = np.column_stack([
        N_P, N_K, P_K,
        temp_humidity, temp_rainfall,
        nutrient_sum, nutrient_balance,
        extreme_temp, extreme_humidity, extreme_ph, extreme_rainfall
    ])
    
    return engineered

# Define routes
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/recommendation')
def recommendation():
    return render_template("recommendation.html")

@app.route("/predict", methods=['POST'])
def predict():
    try:
        # Check if request is JSON
        if request.is_json:
            data = request.get_json()
            N = data.get('Nitrogen')
            P = data.get('Phosporus') 
            K = data.get('Potassium')
            temp = data.get('Temperature')
            humidity = data.get('Humidity')
            ph = data.get('Ph')
            rainfall = data.get('Rainfall')
        else:
            # Extracting data from the form
            N = request.form.get('Nitrogen')
            P = request.form.get('Phosporus')
            K = request.form.get('Potassium')
            temp = request.form.get('Temperature')
            humidity = request.form.get('Humidity')
            ph = request.form.get('Ph')
            rainfall = request.form.get('Rainfall')

        # Convert inputs to float
        feature_list = [float(N), float(P), float(K), float(temp), float(humidity), float(ph), float(rainfall)]
        
        # Check for extreme values
        warnings = check_extreme_values(float(N), float(P), float(K), float(temp), float(humidity), float(ph), float(rainfall))
        
        # Create feature vector with engineered features
        base_features = np.array(feature_list).reshape(1, -1)
        engineered_features = engineer_features(base_features)
        
        # Combine base and engineered features
        features = np.hstack([base_features, engineered_features])
        
        # Scale the features
        scaled_features = scaler.transform(features)

        # Get all predictions with probabilities
        probabilities = model.predict_proba(scaled_features)[0]
        crop_probs = list(zip(model.classes_, probabilities))
        
        # Filter and sort valid crops
        valid_crops = []
        input_data = {
            'Temperature': float(temp),
            'Rainfall': float(rainfall),
            'Humidity': float(humidity),
            'Ph': float(ph)
        }
        
        for crop, prob in crop_probs:
            if validate_crop(crop, input_data):
                valid_crops.append((crop, prob))
        
        # Sort by probability and get top 3
        valid_crops.sort(key=lambda x: x[1], reverse=True)
        top_crops = valid_crops[:3]
        
        # If no valid crops, use fallback
        if not top_crops:
            top_crops = get_fallback_recommendation(
                float(N), float(P), float(K),
                float(temp), float(humidity),
                float(ph), float(rainfall)
            )
            warnings.append("No crops met the biological requirements. Showing fallback recommendations.")
        
        # Prepare response
        response = {
            'status': 'success',
            'prediction': top_crops[0][0] if top_crops else 'Unknown',
            'top_crops': [{
                'crop_name': crop_dict.get(crop, crop),
                'confidence': round(prob * 100, 2),
                'group': get_crop_group(crop)
            } for crop, prob in top_crops],
            'warnings': warnings,
            'input_data': {
                'Nitrogen': N,
                'Phosporus': P,
                'Potassium': K,
                'Temperature': temp,
                'Humidity': humidity,
                'Ph': ph,
                'Rainfall': rainfall
            }
        }
        
        # Return JSON if it was a JSON request, otherwise render template
        if request.is_json:
            return jsonify(response)
        else:
            return render_template('recommendation.html', 
                                result=response['prediction'], 
                                top_crops=response['top_crops'],
                                warnings=warnings)
            
    except Exception as e:
        error_response = {'status': 'error', 'message': str(e)}
        if request.is_json:
            return jsonify(error_response), 400
        else:
            return render_template('recommendation.html', error=str(e))

if __name__ == '__main__':
    app.run(debug=True)