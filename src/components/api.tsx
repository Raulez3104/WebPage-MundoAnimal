export const submitContactForm = async (formData: FormData) => {
    try {
        const data = Object.fromEntries(formData.entries());
        
        const response = await fetch('http://localhost:3000/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error al enviar los datos');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};