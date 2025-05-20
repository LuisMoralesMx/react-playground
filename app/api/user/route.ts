import { NextResponse } from "next/server";

export async function GET() {
    const data = {
        name: 'John Doe',
        email: 'john.doe@email.com',
        timeStamp: new Date().toISOString(),
    };

    return NextResponse.json(data, {
        status: 200,
        statusText: 'OK',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
            'X-Custom-Header': 'CustomValue',
        },
    });
}
