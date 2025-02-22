// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HelloBlockchain {

    string private message;  // Variable pour stocker le message

    // Initialisation du message lors du déploiement
    constructor(string memory _message) {
        message = _message;
    }

    // Fonction pour lire le message stocké
    function getMessage() public view returns (string memory) {
        return message;
    }

    // Fonction pour modifier le message
    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
