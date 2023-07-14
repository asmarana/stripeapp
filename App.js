import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { StripePublishKey } from '@env';
import PaymentScreen from './src/screens/paymentScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StripeProvider
        publishableKey={StripePublishKey}
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <PaymentScreen />
      </StripeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
