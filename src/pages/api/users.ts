import { NextApiRequest, NextApiResponse } from "next"
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: "Mateus" },
        { id: 2, name: "Isadora" },
        { id: 3, name: "Karine" },
    ]

    return response.json(users)
}