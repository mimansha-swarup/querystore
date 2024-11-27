import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

const renderRow = (labelElement: ReactNode, inputELement: ReactNode) => {
  return (
    <div className="flex items-center gap-1">
      {labelElement}
      {inputELement}
    </div>
  );
};

const ProfileSection = () => {
  return (
    <section className="p-6 bg-sidebarBackground  rounded-xl shadow-lg mb-4 flex flex-col">
      <h2 className=" text-3xl mb-6">My Profile</h2>
      <div className="flex flex-col gap-4  ">
        {renderRow(<Label htmlFor="name">Username : </Label>, <p>Aman1234</p>)}
        {renderRow(
          <Label htmlFor="name">Name : </Label>,
          <Input id="name" className="w-1/4 ring-1 ring-accent" />
        )}
        {renderRow(
          <Label htmlFor="email">Email : </Label>,
          <Input id="email" className="w-1/4 ring-1 ring-accent" />
        )}
        <Button className=" ml-auto">Update</Button>
      </div>
    </section>
  );
};

export default ProfileSection;