# Google Maps API Setup Guide

## Fixing the "Places API not authorized" Error

Your API key needs to have the **Places API** enabled. Here's how to fix it:

### Step 1: Go to Google Cloud Console

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)

### Step 2: Enable Required APIs

1. Go to **APIs & Services** → **Library**
2. Search for and enable these APIs:
   - ✅ **Maps JavaScript API** (for displaying maps)
   - ✅ **Places API** (for location search/autocomplete) - **THIS IS THE ONE YOU'RE MISSING**
   - ✅ **Geocoding API** (optional, for address conversion)

### Step 3: Check API Key Restrictions

1. Go to **APIs & Services** → **Credentials**
2. Click on your API key
3. Under **API restrictions**, make sure:
   - Either "Don't restrict key" is selected, OR
   - "Restrict key" is selected and includes:
     - Maps JavaScript API
     - Places API
     - Geocoding API (if using)

### Step 4: Update Your .env File

Make sure your `.env` file in `myreactproject` has:

```env
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### Step 5: Restart Your Frontend

After enabling the APIs, restart your frontend server:

```powershell
# Stop the server (Ctrl+C) and restart
cd "C:\Users\swostika kc\Desktop\myproject\myreactproject"
npm run dev
```

## Performance Warning Fix

The performance warning about `libraries` prop has been fixed by:
- Creating a shared config file (`config/googleMaps.js`)
- Using a constant `GOOGLE_MAPS_LIBRARIES` array instead of creating new arrays
- Using unique `id` values for each `useJsApiLoader` instance

## Testing

After enabling Places API:
1. Click the search icon in the navbar
2. Type a location (e.g., "Lakeside, Pokhara")
3. You should see Google Places suggestions
4. Select a location to see nearby venues

## Common Issues

### "ApiTargetBlockedMapError"
- **Solution**: Enable Places API in Google Cloud Console

### "This API key is not authorized"
- **Solution**: Check API restrictions and make sure Places API is allowed

### Still not working?
- Wait 5-10 minutes after enabling APIs (they need time to propagate)
- Check your API key billing is enabled
- Verify the API key in your `.env` file is correct


