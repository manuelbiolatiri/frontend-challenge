import useHandleResponse from '../Utilities/handle-response';
import authHeader from '../Utilities/auth-header';
import jwtDecode from "jwt-decode";

const jwt = window.localStorage.getItem("currentUser");
  const token = JSON.parse(jwt);

// Receive global messages
export function useGetGlobalMessages() {
    
    const handleResponse = useHandleResponse();
    const requestOptions = {
        method: 'GET',
        headers: token,
    };

    const getGlobalMessages = () => {
        return fetch(
            `${'http://localhost:5000'}/api/messages/global`,
            requestOptions
        )
            .then(handleResponse)
            .catch((e) => e);
    };

    return getGlobalMessages;
}

// Send a global message
export function useSendGlobalMessage() {
    
    const handleResponse = useHandleResponse();

    const sendGlobalMessage = body => {
        const requestOptions = {
            method: 'POST',
            headers: token,
            body: JSON.stringify({ body: body, global: true }),
        };

        return fetch(
            `${'http://localhost:5000'}/api/messages/global`,
            requestOptions
        )
            .then(handleResponse)
            .catch((e) => e);
    };

    return sendGlobalMessage;
}

// Get list of users conversations
export function useGetConversations() {
    
    const handleResponse = useHandleResponse();
    const requestOptions = {
        method: 'GET',
        headers: token,
    };

    const getConversations = () => {
        return fetch(
            `${'http://localhost:5000'}/api/messages/conversations`,
            requestOptions
        )
            .then(handleResponse)
            .catch((e) => e);
    };

    return getConversations;
}

// get conversation messages based on
// to and from id's
export function useGetConversationMessages() {
    console.log(token)
    const handleResponse = useHandleResponse();
    const requestOptions = {
        method: 'GET',
        headers: token,
    };

    const getConversationMessages = id => {
        return fetch(
            `${
                'http://localhost:5000'
            }/api/messages/conversations/query?userId=${id}`,
            requestOptions
        )
            .then(handleResponse)
            .catch((e) => e);
    };

    return getConversationMessages;
}

export function useSendConversationMessage() {
    
    const handleResponse = useHandleResponse();

    const sendConversationMessage = (id, body) => {
        const requestOptions = {
            method: 'POST',
            headers: token,
            body: JSON.stringify({ to: id, body: body }),
        };

        return fetch(
            `${'http://localhost:5000'}/api/messages/`,
            requestOptions
        )
            .then(handleResponse)
            .catch((e) => e);
    };

    return sendConversationMessage;
}
