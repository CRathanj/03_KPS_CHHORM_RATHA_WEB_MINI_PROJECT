import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import Link from "next/link";
import { getAllWorkSpaceService } from "@/service/auth/workSpace.service";

export default async function SidebarComponent() {
  const workSpace = await getAllWorkSpaceService();
  console.log("data :", workSpace)
  return (
    <main>

      <div className="pl-10 mt-6 h-screen">
        <div className="flex justify-between">
          <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
        </div>

        {/* workspace */}
        <div className="flex justify-between mt-10">
          <h1 className="uppercase text-gray font-bold">workspace</h1>
          <WorkspacePopupComponent />
        </div>

        {/* each workspace */}
        {workSpace.data.map((data) => (
          <div key={data.workSpaceId} className="flex items-center mt-5 w-full">
            <div className={`rounded-full w-4 h-4 bg-todo 
              ${data === "Homework" ? "bg-yellow-400" : ""

              }`}></div>
            <div className="flex justify-between w-full pl-3">
              <Link href={`/${data.workSpaceId}`} replace>
                {
                  data.workspaceName
                }
              </Link>

              <EditDeleteDropDownComponent />
            </div>
          </div>
        ))}

        {/* favorite*/}
        < div className="flex justify-between mt-10" >
          <h1 className="uppercase text-gray font-bold">favorite</h1>
          <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
        </div>

        {/* each favorite workspace */}
        {workSpace.data.map((favorite, id) => {
          if(!favorite.isFavorite)(
          <div className="flex items-center mt-5 w-full">
            <div className="rounded-full w-4 h-4 bg-workingOn"></div>
            <div className="flex justify-between w-full pl-3">
              <Link href={``}>
                {favorite.workspaceName}
              </Link>
            </div>
          </div>
        )})}

      </div>
    </main >
  );
}
