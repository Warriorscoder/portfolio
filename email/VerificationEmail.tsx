import {
    Html,
    Head,
    Font,
    Preview,
    Row,
    Section,
    Text,
    // Button,
} from '@react-email/components';

interface VerificationEmailProps {
    name: string;
    message: string;
}

export default function VerificationEmail({ name, message }: VerificationEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Portfolio Contact Us from message</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>You have a message from {name}</Preview>
            <Section>
                <Row>
                    <Text>You have a message from {name},</Text>
                </Row>
                <Row>
                    <Text>{`Here's your message: `}</Text>
                </Row>
                <Row>
                    <Text>{message}</Text>
                </Row>
            </Section>

        </Html>
    );
}