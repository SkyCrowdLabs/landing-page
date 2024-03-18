import { NextRequest, NextResponse } from 'next/server';
import * as mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export async function POST(response: NextRequest) {
  if (
    !(
      process.env.MAILCHIMP_LIST_ID &&
      process.env.MAILCHIMP_API_KEY &&
      process.env.MAILCHIMP_SERVER
    )
  ) {
    console.error('Check mailchimp environment variables');
    return;
  }

  const body: { email?: string } = await response.json();

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: body.email || '',
      status: 'subscribed',
    });

    return NextResponse.json(
      { message: 'Email successfully collected' },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'There has been an error' });
  }
}
