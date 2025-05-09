// Agricultural profile data for Ahilyanagar talukas
const talukaData = {
    "Rahata": {
        description: "Located near Shirdi with abundant irrigation from Mula-Pravara river system. Known for cash crops and proximity to sugar mills.",
        locationAdvantages: [
            "Proximity to Shirdi sugar mills reduces transportation costs",
            "Mula-Pravara river provides reliable irrigation",
            "Well-connected to major markets through road network",
            "Favorable climate for fruit cultivation"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "750000 tonnes",
                area: "7.9%",
                importance: "Primary cash crop supporting local sugar industry",
                advantages: "High-yielding varieties available; stable market prices; supports ancillary industries",
                isDominant: true
            },
            {
                name: "Grapes – द्राक्ष",
                production: "90000 tonnes",
                area: "",
                importance: "Export-oriented cultivation with EU standards",
                advantages: "High profit margins; established export channels; suitable for value-added products like wine",
                isDominant: false
            },
            {
                name: "Pomegranate – डाळिंब",
                production: "12000 tonnes",
                area: "",
                importance: "Emerging as premium export crop",
                advantages: "Disease-resistant varieties available; long shelf life; growing international demand",
                isDominant: false
            }
        ]
    },
    "Sangamner": {
        description: "Diverse cropping pattern with mix of cereals, oilseeds and pulses. Light soil conditions favor dryland crops.",
        locationAdvantages: [
            "Varied soil types support diverse cropping",
            "Moderate rainfall distributed well through season",
            "Established market yards for agricultural produce",
            "Good connectivity to Pune and Nashik markets"
        ],
        crops: [
            {
                name: "Bajra – बाजरी",
                production: "11640 tonnes",
                area: "11.8%",
                importance: "Staple food crop for local consumption",
                advantages: "Drought-resistant; requires minimal inputs; dual purpose (grain & fodder)",
                isDominant: true
            },
            {
                name: "Groundnut – भुईमूग",
                production: "4200 tonnes",
                area: "",
                importance: "Important oilseed crop for local oil mills",
                advantages: "Soil-enriching legume; short duration; multiple uses (oil, fodder, direct consumption)",
                isDominant: false
            },
            {
                name: "Soybean – सोयाबीन",
                production: "5000 tonnes",
                area: "",
                importance: "Commercial crop with processing units nearby",
                advantages: "High protein content; improves soil health; established market linkages",
                isDominant: false
            }
        ]
    },
    "Parner": {
        description: "Known as the onion belt of Maharashtra with extensive storage facilities. Semi-arid region with innovative water management.",
        locationAdvantages: [
            "Ghanegaon region specializes in onion cultivation",
            "Multiple onion storage and processing facilities",
            "Drip irrigation widely adopted",
            "Direct export channels established"
        ],
        crops: [
            {
                name: "Onion – कांदा",
                production: "204000 tonnes",
                area: "9.5%",
                importance: "Major export crop with international demand",
                advantages: "High profit potential; storage possible for market timing; established export networks",
                isDominant: true
            },
            {
                name: "Jowar – ज्वारी",
                production: "9500 tonnes",
                area: "",
                importance: "Traditional drought-resistant crop",
                advantages: "Low water requirement; multiple uses (food, fodder, value-added products)",
                isDominant: false
            },
            {
                name: "Wheat – गहू",
                production: "6800 tonnes",
                area: "",
                importance: "Rabi season crop utilizing residual moisture",
                advantages: "Stable yields; established market; household consumption",
                isDominant: false
            }
        ]
    },
    "Shrirampur": {
        description: "Industrial-agricultural hub with sugar factories and fertile alluvial soil. Canal irrigation supports intensive cultivation.",
        locationAdvantages: [
            "Canal irrigation from Godavari river system",
            "Multiple sugar processing units in vicinity",
            "Fertile alluvial soil ideal for sugarcane",
            "Well-developed agricultural support services"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "600000 tonnes",
                area: "6.3%",
                importance: "Backbone of local agro-industry",
                advantages: "Assured procurement by sugar mills; high productivity potential; year-round income",
                isDominant: true
            },
            {
                name: "Wheat – गहू",
                production: "7000 tonnes",
                area: "",
                importance: "Secondary rabi crop after sugarcane",
                advantages: "Nutrient-dense grain; established market; complements sugarcane cycle",
                isDominant: false
            }
        ]
    },
    "Kopargaon": {
        description: "Godavari basin area with reliable irrigation. Known for high-value horticulture alongside traditional crops.",
        locationAdvantages: [
            "Godavari river provides abundant water resources",
            "Established grape vineyards with export facilities",
            "Progressive farming community adopting new technologies",
            "Proximity to Nashik grape cluster benefits knowledge sharing"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "675000 tonnes",
                area: "7.1%",
                importance: "Core crop supporting local economy",
                advantages: "High productivity per acre; stable market; supports related industries",
                isDominant: true
            },
            {
                name: "Grapes – द्राक्ष",
                production: "85000 tonnes",
                area: "",
                importance: "High-value export crop",
                advantages: "Premium quality production; established cold chain infrastructure; higher profitability",
                isDominant: false
            }
        ]
    },
    "Nevasa": {
        description: "Fertile black cotton soil region with extensive canal network. Major contributor to district's sugar production.",
        locationAdvantages: [
            "Black cotton soil retains moisture effectively",
            "Canal irrigation from Pravara river",
            "Multiple sugar factories in operational radius",
            "Agricultural research station provides technical support"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "825000 tonnes",
                area: "8.7%",
                importance: "Primary economic driver for the region",
                advantages: "Consistently high yields; established processing infrastructure; year-round employment",
                isDominant: true
            },
            {
                name: "Wheat – गहू",
                production: "9000 tonnes",
                area: "",
                importance: "Complementary rabi season crop",
                advantages: "Stable market prices; low risk cultivation; household food security",
                isDominant: false
            }
        ]
    },
    "Pathardi": {
        description: "Semi-arid region with focus on drought-resistant crops. Traditional dryland farming with innovative water conservation.",
        locationAdvantages: [
            "Traditional knowledge of dryland farming",
            "Watershed development programs implemented",
            "Light soil suitable for millets and pulses",
            "Emerging market linkages for traditional crops"
        ],
        crops: [
            {
                name: "Bajra – बाजरी",
                production: "10864 tonnes",
                area: "11.1%",
                importance: "Climate-resilient staple crop",
                advantages: "Requires minimal inputs; tolerant to erratic rainfall; dual purpose crop",
                isDominant: true
            },
            {
                name: "Pulses – कडधान्य",
                production: "4100 tonnes",
                area: "",
                importance: "Soil health maintaining crops",
                advantages: "Nitrogen fixation improves soil; short duration; nutritional security",
                isDominant: false
            }
        ]
    },
    "Shevgaon": {
        description: "Transitional zone between irrigated and rainfed agriculture. Mix of commercial and subsistence farming.",
        locationAdvantages: [
            "Diverse micro-climates support varied crops",
            "Traditional water harvesting systems",
            "Emerging market for organic produce",
            "Progressive farmer groups driving innovation"
        ],
        crops: [
            {
                name: "Bajra – बाजरी",
                production: "10088 tonnes",
                area: "10.3%",
                importance: "Food security crop for rural households",
                advantages: "Reliable yields in low rainfall; minimal input costs; staple food",
                isDominant: true
            },
            {
                name: "Moong – मुग, Udad – उडीद",
                production: "4400 tonnes",
                area: "",
                importance: "Soil-enriching pulse crops",
                advantages: "Short duration allows multiple crops; improves soil fertility; nutritional value",
                isDominant: false
            }
        ]
    },
    "Akole": {
        description: "Foothill region with mix of irrigation and rainfed farming. Emerging as fruit production hub.",
        locationAdvantages: [
            "Diverse agro-climatic conditions",
            "Emerging infrastructure for fruit processing",
            "Proximity to Mumbai market",
            "Traditional tribal farming knowledge"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "712500 tonnes",
                area: "7.5%",
                importance: "Economic backbone of irrigated areas",
                advantages: "Assured income; supports local processing units; long-term crop",
                isDominant: true
            },
            {
                name: "Grapes – द्राक्ष",
                production: "75000 tonnes",
                area: "",
                importance: "High-value horticulture crop",
                advantages: "Export potential; higher returns per acre; value addition opportunities",
                isDominant: false
            },
            {
                name: "Pomegranate – डाळिंब",
                production: "13500 tonnes",
                area: "",
                importance: "Emerging superfood with export demand",
                advantages: "Drought-resistant varieties available; long shelf life; premium pricing",
                isDominant: false
            }
        ]
    },
    "Rahuri": {
        description: "Home to Maharashtra's premier agricultural university. Showcase of scientific farming techniques.",
        locationAdvantages: [
            "Presence of MPKV agricultural university",
            "Early adopter of new technologies",
            "High density of progressive farmers",
            "Excellent research-extension-farmer linkages"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "787500 tonnes",
                area: "8.3%",
                importance: "Flagship crop with research backing",
                advantages: "Highest productivity in district; disease-resistant varieties; optimized practices",
                isDominant: true
            },
            {
                name: "Wheat – गहू",
                production: "8000 tonnes",
                area: "",
                importance: "Rabi season crop demonstrating new varieties",
                advantages: "High-yielding varieties tested; complementary to sugarcane; stable returns",
                isDominant: false
            }
        ]
    },
    "Shrigonda": {
        description: "Canal-irrigated area with high agricultural productivity. Major contributor to district's sugar production.",
        locationAdvantages: [
            "Kukadi and Ghod canal irrigation network",
            "Highly productive black soil",
            "Cluster of sugar factories",
            "Well-developed agricultural credit system"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "937500 tonnes",
                area: "9.9%",
                importance: "Primary economic activity in region",
                advantages: "Highest yields per acre; well-established market; supports rural economy",
                isDominant: true
            },
            {
                name: "Cotton – कपाशी",
                production: "5200 tonnes",
                area: "",
                importance: "Traditional cash crop",
                advantages: "Price support available; suitable soil conditions; raw material for textiles",
                isDominant: false
            }
        ]
    },
    "Karjat": {
        description: "Rainfed farming zone with focus on climate-resilient crops. Marginal farming with emphasis on sustainability.",
        locationAdvantages: [
            "Traditional water conservation systems",
            "Organic farming initiatives gaining ground",
            "Strong farmer producer organizations",
            "Emerging market for millets and traditional crops"
        ],
        crops: [
            {
                name: "Bajra – बाजरी",
                production: "10476 tonnes",
                area: "10.7%",
                importance: "Staple crop for food security",
                advantages: "Grows well in poor soils; climate resilient; low input requirements",
                isDominant: true
            },
            {
                name: "Groundnut – भुईमूग",
                production: "4800 tonnes",
                area: "",
                importance: "Oilseed crop for local consumption",
                advantages: "Soil-enriching properties; multiple uses; short duration crop",
                isDominant: false
            }
        ]
    },
    "Jamkhed": {
        description: "Drought-prone area with innovative dryland farming systems. Pioneer in sustainable agricultural practices.",
        locationAdvantages: [
            "Pioneer in watershed development",
            "Strong community-based farming systems",
            "National recognition for sustainable practices",
            "Emerging as model for climate-resilient farming"
        ],
        crops: [
            {
                name: "Bajra – बाजरी",
                production: "11232 tonnes",
                area: "11.5%",
                importance: "Primary food grain crop",
                advantages: "Extremely drought-resistant; staple in local diet; requires minimal inputs",
                isDominant: true
            },
            {
                name: "Pulses – कडधान्य",
                production: "3900 tonnes",
                area: "",
                importance: "Soil health maintenance crops",
                advantages: "Nitrogen fixation improves soil; nutritional security; short duration",
                isDominant: false
            }
        ]
    },
    "Ahmednagar": {
        description: "District headquarters with mix of urban and rural agriculture. Central hub for agricultural markets and processing.",
        locationAdvantages: [
            "Central location for agricultural markets",
            "Diverse agro-processing industries",
            "Excellent transport connectivity",
            "Availability of agricultural services and inputs"
        ],
        crops: [
            {
                name: "Sugarcane – ऊस",
                production: "862500 tonnes",
                area: "9.1%",
                importance: "Core commercial crop",
                advantages: "High productivity; supports sugar industry; generates rural employment",
                isDominant: true
            },
            {
                name: "Wheat – गहू",
                production: "9500 tonnes",
                area: "",
                importance: "Staple winter crop",
                advantages: "Essential for household consumption; stable market; storage potential",
                isDominant: false
            }
        ]
    }
};

document.getElementById('taluka-select').addEventListener('change', function() {
    const taluka = this.value;
    const resultDiv = document.getElementById('result');
    
    if (!taluka) {
        resultDiv.innerHTML = '<div class="no-results">Please select a taluka to view detailed agricultural information</div>';
        return;
    }
    
    const data = talukaData[taluka];
    if (!data || !data.crops || data.crops.length === 0) {
        resultDiv.innerHTML = '<div class="no-results">No agricultural data available for this taluka</div>';
        return;
    }
    
    // Find dominant crop (highest production)
    let dominantCrop = null;
    let maxProduction = 0;
    data.crops.forEach(crop => {
        const production = parseInt(crop.production.replace(/,/g, '').split(' ')[0]);
        if (production > maxProduction) {
            maxProduction = production;
            dominantCrop = crop.name.split(' – ')[0];
        }
    });
    
    let html = `
        <div class="taluka-header">
            <h2 class="taluka-name">${taluka} Taluka</h2>
            <div class="taluka-description">${data.description}</div>
        </div>
        
        <div class="agricultural-profile">
            <h3 class="profile-title">Agricultural Profile</h3>
            <p><strong>Dominant Crop:</strong> ${dominantCrop} (${maxProduction.toLocaleString()} tonnes)</p>
            
            <div class="location-advantages">
                <div class="detail-label">Key Location Advantages:</div>
                <div class="detail-content">
                    ${data.locationAdvantages.map(adv => `<div class="advantage-item">${adv}</div>`).join('')}
                </div>
            </div>
        </div>
        
        <h3>Major Crops Production Details</h3>
        <div class="crop-container">
    `;
    
    data.crops.forEach(crop => {
        const [engName, marName] = crop.name.split(' – ');
        const isDominant = crop.name.startsWith(dominantCrop);
        
        html += `
            <div class="crop-card ${isDominant ? 'dominant-crop' : ''}">
                <div class="crop-title">
                    ${engName}
                    ${crop.production ? `<span class="production-badge ${isDominant ? 'dominant-badge' : ''}">${crop.production}</span>` : ''}
                </div>
                <div class="crop-name-marathi">${marName}</div>
                
                <div class="crop-stats">
                    ${crop.area ? `<div class="stat-item"><span class="stat-icon">🌾</span> Area: ${crop.area}</div>` : ''}
                    ${isDominant ? `<div class="stat-item"><span class="stat-icon">⭐</span> Dominant Crop</div>` : ''}
                </div>
                
                <div class="crop-details">
                    <div class="detail-section">
                        <span class="detail-label">Agricultural Importance:</span>
                        <div class="detail-content">${crop.importance}</div>
                    </div>
                    
                    <div class="detail-section">
                        <span class="detail-label">Competitive Advantages:</span>
                        <div class="detail-content">${crop.advantages}</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    resultDiv.innerHTML = html;
}); 