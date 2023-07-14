import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { CardField, useStripe } from '@stripe/stripe-react-native';
import Button from '../components/button';

const PaymentScreen = () => {

    const [cardInfo, setCardInfo] = useState(null)

    const fetchCardDetail = (cardDetail) => {
        console.log("my card details", cardDetail)
        if (cardDetail.complete) {
            setCardInfo(cardDetail)
        } else {
            setCardInfo(null)
        }
    }

    const onDone = async() => {
        console.log("cardInfocardInfocardInfo", cardInfo)
        if (!!cardInfo) {
            try {
                const resToken = await createToken({ ...cardInfo, type: 'Card' })
                console.log("resToken", resToken)

            } catch (error) {
                alert("Error raised during create token",error)
            }
        }

    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1, padding: 18 }}>
                <Text style={styles.sectionTitle}>Payment</Text>
                <CardField
                    postalCodeEnabled={false}
                    placeholders={{
                        number: '4242 4242 4242 4242',
                    }}
                    cardStyle={{
                        backgroundColor: 'white',
                        textColor: '#000000',
                    }}
                    style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                    }}
                    onCardChange={(cardDetails) => {
                        fetchCardDetail(cardDetails)

                    }}
                    onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                    }}
                />
                <Button onPress={onDone} disabled={!cardInfo} />
            </SafeAreaView>
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
})