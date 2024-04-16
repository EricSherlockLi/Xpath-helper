// src/iconPopup.jsx
import React, { useState } from 'react';
import { Button, Typography } from 'antd';
const { Title, Paragraph } = Typography;

const IconPopup = () => {
    // Start with the extension being disabled, i.e., needing to be started
    const [isExtensionEnabled, setIsExtensionEnabled] = useState(false);

    // Toggle the state of the extension between enabled and disabled
    const toggleExtension = () => {
        chrome.runtime.sendMessage({ command: "toggle" }, function (response) {
            setIsExtensionEnabled(response.enabled);
        });
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            minWidth: '180px',
            //backgroundColor: '#FFD54F', // Uncomment or adjust this line if you want to change the background color
        }}>
            <Title level={4} style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>XPath Finder</Title>
            <Paragraph>Quickly find and copy XPath of any element.</Paragraph>
            <Button
                type={isExtensionEnabled ? 'danger' : 'primary'}
                ghost
                onClick={toggleExtension}
                style={{ minWidth: '150px' }}
            >
                {isExtensionEnabled ? 'Stop' : 'Start'} Extension
            </Button>
        </div>
    );
};

export default IconPopup;
