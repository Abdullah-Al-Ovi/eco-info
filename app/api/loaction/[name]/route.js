import { getLocationByName } from "../loaction-utils";

export async function GET(request,{params}){
    const {name} = params;
    const locationData = getLocationByName(name)
    return Response.json(locationData)
}