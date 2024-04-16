// src/iconPopup.jsx
import React, { useState } from 'react';
import { Button, Typography } from 'antd';
const { Title, Paragraph } = Typography;

const Popup = () => {
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleExtension = () => {
        setIsEnabled(!isEnabled);
        // Here you can also communicate with background.js if needed
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            minWidth: '180px',
            //backgroundColor: '#FFD54F',
        }}>
            <Title level={4} style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>XPath Finder</Title>
            <Paragraph>Quickly find and copy XPath of any element.</Paragraph>
            <Button
                type={isEnabled ? 'primary' : 'default'}
                ghost
                onClick={toggleExtension}
                style={{ minWidth: '150px' }}
            >
                {isEnabled ? 'Disable' : 'Enable'} Extension
            </Button>
        </div>
    );
};

export default Popup;
