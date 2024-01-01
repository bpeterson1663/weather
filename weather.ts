import { fetchLocationData, type LocationInfo } from "./location";

 const GEOCODE_API_URL = "https://geocode.maps.co/search"

async function main(): Promise<number> {
    console.log(process.argv)
    if (process.argv.length !== 3) {
        console.error("usage: weather LOCATION")
        return 1;
    }

    const location = process.argv[2]
    let locationInfo: LocationInfo

    try {
        locationInfo = await fetchLocationData(GEOCODE_API_URL, location)
        console.log(locationInfo)
    } catch(err) {
        console.error(err)
        return 1
    }
    
    return await Promise.resolve(0)
}

main().catch(err => console.error(err))