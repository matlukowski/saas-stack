'use client';

import { Button } from '@/components/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/card';

export default function DashboardPage() {
  return (
    <main className="flex-1 p-4 lg:p-8 space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>MAU</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">1,024</p>
            <p className="text-sm text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">$4,230</p>
            <p className="text-sm text-muted-foreground">MRR (demo)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>API Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">87,541</p>
            <p className="text-sm text-muted-foreground">Requests this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">Free</p>
            <p className="text-sm text-muted-foreground">Upgrade to unlock more</p>
          </CardContent>
          <CardFooter>
            <Button className="rounded-full">Upgrade</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick start</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="rounded-full w-full">Create project</Button>
            <Button variant="outline" className="rounded-full w-full">Invite teammate</Button>
            <Button variant="outline" className="rounded-full w-full">Set up billing</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Welcome to your new dashboard 👋</li>
              <li>This is placeholder content using shadcn/ui components.</li>
              <li>Wire this up to your data when ready.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
