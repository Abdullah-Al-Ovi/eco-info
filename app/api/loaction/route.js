import { getLocations } from "./loaction-utils";

export async function GET(){
    const locations = getLocations()
    return Response.json(locations)
}