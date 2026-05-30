export default async function handler(req, res) {
    try{
        const response = await fetch(
            'https://enuxwaroocxloprjoxpu.supabase.co',
            {
                headers: {
                    Authorization: `Bearer ${process.env.api_key}`
                }
            }
        )
        const data = await response.json()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            error: "Error ao buscar dados!"
        })
    }
}