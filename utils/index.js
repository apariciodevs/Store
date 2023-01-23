export async function strorefront(query, variables = {}) {
    const response = await fetch( process.env.SHOPIFY_STORE_DOMAIN,  {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

            },
            body: JSON.stringify({query, variables}),
        })
        return response.json();
}