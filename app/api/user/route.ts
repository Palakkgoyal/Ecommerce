const createSanityDocument = async () => {
    try {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.SANITY_USER_TOKEN}`,
            },
            body: JSON.stringify({
                mutations: [
                    {
                        create: {
                            _type: 'user', // Replace with your document type in Sanity
                            // Add other fields and their values as needed
                        },
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to create document in Sanity');
        }

        const data = await response.json();
        console.log('Document created:', data);
    } catch (error) {
        console.error('Error creating document:', error);
    }
};
