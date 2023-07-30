import { useState } from "preact/hooks";

export default function Form() {
  const [content, setContent]: [string, Function] = useState("");

  function send(): void {
    fetch("/api/save", {
      method: "POST",
      body: `{
        "content": ${content}
      }`,
    });
    alert("送信ありがと : " + content);
    location.reload();
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[80vh]">
        <h1 className="text-2xl font-bold">タレコミフォーム</h1>
        <textarea
          className="mt-4 w-[75%] h-[50%] text-xl border-2 border-black"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={() => {
            send();
          }}
          className="mt-4 text-xl border-2 border-black p-2 rounded"
        >
          送信
        </button>
      </div>
    </>
  );
}
