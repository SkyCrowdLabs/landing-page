import { NextPage } from 'next';
import React from 'react';

interface ProjectProps {
  params: { slug: string };
}

const Project: NextPage<ProjectProps> = (props) => {
  return (
    <div className="mt-20 w-full bg-white text-center text-lg text-black">
      {props.params.slug}
    </div>
  );
};

export default Project;
