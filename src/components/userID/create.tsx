import { randomUUID } from "crypto";

function generateUUID() {
  return randomUUID();
}

export default function CreateUserID(quizid: string) {
    function writeDB() {
        // if database with quizid exists, write make the uuid and write it to the database
        // if the database with the quizid does not exist, create the database and write the uuid to it
    }
}