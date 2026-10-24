export default {
  async fetch(request) {
    let response = await fetch(request);
    let newResponse = new Response(response.body, response);
    newResponse.headers.set("X-ITP-Origin", "human");
    newResponse.headers.set("X-ITP-Rank-Signal", "organic");
    newResponse.headers.set("X-ITP-AI", "0");
    return newResponse;
  }
}
