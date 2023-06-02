# gpt-api

## Description

This is a simple API that uses [GPT-3](https://platform.openai.com/docs/api-reference) to generate text based on a prompt.

## How to use?

1. Clone the repository: `git clone git@github.com:Fazanwolf/gpt-api.git`
2. Install dependencies: `npm install` (node 17+ required, npm 8+ required)
3. Copy `.env.example` to `.env` and fill in the values
4. Run the server: `npm run dev`

## Endpoints

<details><summary>POST /suggest</summary><blockquote>

Endpoint to get suggestions from a prompt.

<details><summary>Body example</summary>

```json
{
"model": "One models from the list", // optional, default: gpt-3.5-turbo
"prompt": "Your prompt input"
}
```

</details>

<details><summary>Response example</summary>

```json
{
  "output": "Your output response"
}
```

</details>

<details><summary>Error codes</summary>

- 400: Bad request

</details>
</blockquote></details>

<details><summary>POST /litho-assistant</summary><blockquote>

Endpoint to get information about a stone in lithotherapy.

<details><summary>Body example</summary>

```json
{
  "stoneName": "Name of your stone",
  "nbWords": "Number of words wanted in the response", // optional, default: 100
  "type": "Type of information wanted" // required, (can be "description", "chakra", "zodiac", "...")
}
```

</details>

<details><summary>Response example</summary>

```json
{
  "output": "Your output response"
}
```

</details>

<details><summary>Error codes</summary>

- 400: Bad request

</details>
</blockquote></details>


## Usefull links

- List of models and compabilities: https://platform.openai.com/docs/models/model-endpoint-compatibility
- DALL-E usage: https://platform.openai.com/docs/guides/images/introduction
- OpenAI Node.js Library: https://www.npmjs.com/package/openai