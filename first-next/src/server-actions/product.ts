"use server";

//sqlite(db) , prisma(orm)

export async function postProd(data?: string) {
  try {
    const raw = await fetch("https://fakestoreadssaapi.com/products", {
      method: "POST",
      headers: { "content-type": "Application/JSON" },
      body: JSON.stringify({ title: "new prod" }),
    });

    await raw.json();
    return { message: "successfully added " + data };
  } catch (error) {
    return "failed";
  }
}

export async function stringSplit(data: string) {
  return data.split(" ");
}
