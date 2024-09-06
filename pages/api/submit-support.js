import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { content, contactPerson, phoneNumber } = req.body;
        const timestamp = new Date().toISOString();

        const markdownContent = `
## Support Request - ${timestamp}

- **Content:** ${content}
- **Contact Person:** ${contactPerson}
- **Phone Number:** ${phoneNumber}

---
`;

        const filePath = path.join(process.cwd(), 'support-requests.md');

        try {
            fs.appendFileSync(filePath, markdownContent);
            res.status(200).json({ message: 'Data stored successfully' });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ message: 'Error storing data' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}