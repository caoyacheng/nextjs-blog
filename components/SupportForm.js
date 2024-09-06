import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function SupportForm({ onClose }) {
    const [formData, setFormData] = useState({
        content: '',
        contactPerson: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/submit-support', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                onClose();
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-xl w-full">
                <h2 className="text-3xl font-serif mb-6 text-gray-800 dark:text-white">支撑需求</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="content" className="font-serif block text-gray-700 dark:text-gray-300 mb-2 text-lg">需求内容 <span className="text-red-500">*</span></label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                            required
                            maxLength={200}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contactPerson" className="font-serif block text-gray-700 dark:text-gray-300 mb-2">联系人 <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="font-serif block text-gray-700 dark:text-gray-300 mb-2">电话 <span className="text-red-500">*</span></label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button type="button" onClick={onClose} className="mr-2">取消</Button>
                        <Button type="submit">提交</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}