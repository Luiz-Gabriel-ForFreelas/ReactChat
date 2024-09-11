import React, { useState } from "react";

import Message from "./Message";

import Form from "./Form";

import axios from "axios";

import "./Client.css";

const Client = () => {

    const [getList, setList] = useState([]);
    const [time, setTime] = useState(new Date());
    const father = "client";

    const url = 'http://localhost:3000/chat/'

    axios.get(url)
    .then(function (response) {
        setList(response.data);
    })

    useEffect(()=> {
        const updateTime = () => {
            setTime(new Date());
        }

        const invervalId = setInterval(updateTime, 1000);

        return () => clearInterval(invervalId);
    }, []);

    const addMessage = (text, father) => {
        const body = {
            id: getList.length + 1,
            user: father,
            hauer: time.toLocaleTimeString(),
            message: text
        }

        axios.post(url, body);
    }

    return (
        <div id="client">
            <div id="top">
                <div id="image">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAM1BMVEX///+8vLz09PS5ubn39/e2trb6+vrBwcHExMTt7e3j4+PW1tbw8PDQ0NDKysrp6end3d2INSksAAAEoUlEQVR4nO2bi46lKhBFWx6iguj/f+3geR9b2CWF2rmXnc6k08nosqAeFPDzU1VVVVVVVVVVVVVVVVX1/1arnHNCtVdzfKtV/Tx2zVvG28G1f4FSDLbTWsvmU1Jq3Xg7qUvR2sEbKb/JPhAbM06XoU2jjoC9paXtr4CbfcxoKxM2/mwDtgMN7WHA7lS+qdvBtthPju4sNuH3sd357DkRZm72wy18Zwxvm2G4l/mOhhvyDHeX7sSxcAy2xXzmSOcYNQtuMd/wh+GC+Q7Ca0fesD7x5kPosp11pUMG1xaCO2Rwy8EF65UuW6YCDvGWKRv3+pJsS1YrmnR31iQYr2RSKznpHnjlSoKpOFyYeqXGVnX4Zbslx0J0tqi/PlUorKgdcHtWG74IHS29Bq7O+3H03hBLwCIpw5HepP08OaGUEqKfrCGZ2xSgI5hONtYFrJeUmjzBgAXKAcKs0+P0yXbnGwzG69h0hEBs12w3PkeouLghWRn4imELbuGDH8aOeXCZI2NwQRiPmTDg8CTghEIepXlVvEIfPybgAh5wDcnziwF4rEnCCTWBr2tYZSgY2NSkI40tK1+04Mt9mi3IATqO14KCXc7AdEKgplDHaHzP6UdrCCcEmLmSMfHSASusXTBdnw7nOj9dgGGRmylsLfCM/IgH0pgcCHAi7bUyvwYVSbiwriLAoWybX+Q5EIt7Ct2cfobOpkPtiWvpUB4rQpddpoBwV2Te6eyABx5cwmcbnd3nRnQjIRoL0EjIX3TD2paSK8AjjqPT2C0UmLuMkZ2BzxJSGarBGF6BIkpjHDId7OjmRxT4aGw8D22XCwczWcBz6VUPmnUcOlAFLDJJuB63OfKrAEIjILVkVAI3wxkVFGWnOI6nHKFTz2m+U3rtcowNK2UbgVG5ozLggWe2XIPUIlvcKp+uJ7aBrfjmU2oi7uVyVoww0j8t0FnRqjdbP1J7x6weGQymr9fozg5THzQNtsHno57/jdWchbns802yMUG7dgU4i+0Q8QgxwWx2sKXpCKPL7ByjiKeN7YMLrO0V/uzEBGcfs7sIOrOymRdvDT/zUgLLm8Ivfrj9WTnAJ5mHG0UimT3Y7n7aumG2dhytnae3/7Yutazg7+TFny59r76DnFLPfz+UOJvE34uK76bMLaXJE6wb/UD+bkrEL2Tza38nrsgKgOsTizYXVbITdLhQv2/nXD7c5syTHi0oVnj9xuQrc2hG/BoX6XcY7oH323q+zMmAtfEkbrVvWW896wqdqljFPJlcS0TxVgczGCX7St8PzoJbytEvOlPuDPzX2KL9nSje59mMoufI3mOr8Q5KFO8dOoudRrnptRu3310/9Nq7kMVO8tz1DPeG0o2NGu9VzJY+gHefeoSdsZQeC+RSwWSNB/Zjofr7JxaHu5UDpD52SsqWSf6/pbzOSBIruUYfddrd76iaosY75rjxz3I1i207ceQtCzbesVdAKDsUl8Hx8M64/JY9uudc7Mkz33m3BvfznXszdOfwnn4fdAffJXdVib2A6+7RIr6rLyK3cQtejfZUu+o7CfVXyD7V3n6qqqqqqqqqqqqqqqqq/gv6ByU7Pd9mkDB7AAAAAElFTkSuQmCC"/>
                </div>
                <div id="name">
                    Consultor
                </div>
                <div id="close">
                    X
                </div>
            </div>
            <div id="message-block">
                {getList.map((item) => (
                    <Message key={item.id} message={item.message} user={item.user} father={father}/>
                ))}
            </div>
            <div id="form">
                <Form father={father} addMessage={addMessage}/>
            </div>
        </div>
    );
};

export default Client;
