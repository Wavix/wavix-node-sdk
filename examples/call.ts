import { wavix } from "./wavix"
import type { CallEvent } from "../src/index"

// npx ts-node-dev --transpile-only examples/call.ts

wavix.call.onEvent(event => {
  console.log("Websocket Event", event)

  if (event.event_type === "answered") {
    wavix.call.playAudio(event.uuid, "https://<YOUR AUDIO FILE>")
  }

  if (event.event_type === "on_call_event" && event.event_payload?.type === "audio") {
    console.log("Audio event:", event.event_payload.payload.status)
  }

  if (event.event_type === "completed") {
    console.log("Call completed")
  }
})

const main = async () => {
  try {
    await wavix.call.connect()

    const response = await wavix.call.start({
      from: "+1234567890",
      to: "+0987654321",
      callback_url: "https://your-callback-url.com/webhook"
    })

    if ("uuid" in response) {
      console.log("Call started!", response)

      const call = await wavix.call.get(response.uuid)
      console.log("Call details:", call)

      const list = await wavix.call.getList()
      console.log("Active calls:", list)
    }
  } catch (error) {
    console.error("Error:", (error as Error).message)
  }
}

main()
