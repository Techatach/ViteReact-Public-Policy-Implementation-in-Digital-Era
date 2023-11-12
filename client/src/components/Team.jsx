import React from "react";

const Team = () => {
  return (
    <div>
      <div class="flex items-center justify-center text-center">
        <div class="flex flex-col p-2 m-2 ">
          <div class="text-3xl font-medium">Meet Our Team</div>
          <div class="text-sm mx-2 md:text-xl text-stone-500">
            Meet the team member who have contributed their designs for this
            websites.
          </div>
          <div class="text-sm mx-2 md:text-xl mb-2 text-stone-500">
            Resource person of Tailblocks communinty
          </div>
          <div class="md:grid flex">
            <div class="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
              <div class="flex-col px-6 py-2  max-w-7xl">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?man,businessman"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div class=" italic text-gray-500">CEO, Tailblocks</div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?boy"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Arkay
                </div>
                <div class=" italic text-gray-500">Executive Producer</div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div class=" italic text-gray-500">HR</div>
              </div>
            </div>
            <div class="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?kid"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Clay Johnson
                </div>
                <div class=" italic text-gray-500">Manager</div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Hannah Saw
                </div>
                <div class=" italic text-gray-500">Marketing Producer</div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?woman"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Wednesday Addams
                </div>
                <div class=" italic text-gray-500">Financer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <div class="mx-96">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum
          iusto ipsa, quasi doloremque vitae amet repellendus hic expedita, quo
          in perspiciatis reiciendis quibusdam vero, perferendis minus ipsam
          corporis consequatur.
          <li className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, a
            fugit nemo iusto quae rerum consequuntur dolorem exercitationem
            laudantium non modi! Architecto, blanditiis expedita? Veritatis
            aliquam vitae debitis consequatur quos!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            provident a quia aliquam sunt! Incidunt labore velit facilis nisi et
            consectetur placeat obcaecati recusandae! Doloribus, nam iure!
            Reiciendis, libero tempore.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            laborum fuga, repellat aliquid quam, excepturi voluptatum
            dignissimos enim cum error facere tenetur. Ad dignissimos dicta ex
            pariatur deserunt sed provident.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque vero
            ex praesentium, velit deleniti modi maxime rerum libero?
            Voluptatibus alias ad repudiandae quisquam, provident pariatur quo
            mollitia cum! Minima, error.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            vel magnam quis ex similique esse blanditiis. Voluptatum eos animi
            aliquam error et voluptates harum laboriosam quam vero. Voluptas, ut
            nostrum.
          </li>
        </p>
      </div>
    </div>
  );
};

export default Team;
