Authorization: Bearer OPENAI_API_KEY

async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    document.getElementById("chatbox").innerHTML += <p><strong>Tu:</strong> ${userInput}</p>;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer ${apiKey}
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    const botReply = data.choices[0].message.content;
    document.getElementById("chatbox").innerHTML += <p><strong>Chatbot:</strong> ${botReply}</p>;
}
