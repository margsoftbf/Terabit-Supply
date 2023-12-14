import { blogPosts } from '@/data/data';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { BlogPostProps } from '@/types/types';

import React, { useState } from 'react';
import Modal from 'react-modal';

const Blog = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState<BlogPostProps | null>(null);

	const openModal = (blogPosts: BlogPostProps) => {
		setSelectedPost(blogPosts);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setSelectedPost(null);
		setModalIsOpen(false);
	};
	return (
		<div id='blog' className='bg-white py-16'>
			<div className='mx-auto max-w-8xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						From the blog
					</h2>
					<p className='mt-2 text-lg leading-8 text-gray-600'>
						Learn how to assembly your computer with our assistance.
					</p>
				</div>
				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className='flex flex-col items-start justify-between'
						>
							<div className='relative w-full'>
								<img
									src={post.imageUrl}
									alt=''
									className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
								/>
								<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
							</div>
							<div className='max-w-xl'>
								<div className='mt-8 flex items-center gap-x-4 text-xs'>
									<time dateTime={post.datetime} className='text-gray-500'>
										{post.date}
									</time>
									<a
										href={post.category.href}
										className='relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
									>
										{post.category.title}
									</a>
								</div>
								<div className='group relative'>
									<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
										<a href='#' onClick={() => openModal(post)}>
											<span className='absolute inset-0' />
											{post.title}
										</a>
									</h3>
									<p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
										{post.description}
									</p>
								</div>
								<div className='relative mt-8 flex items-center gap-x-4'>
									<img
										src={post.author.imageUrl}
										alt=''
										className='h-10 w-10 rounded-full bg-gray-100'
									/>
									<div className='text-sm leading-6'>
										<p className='font-semibold text-gray-900'>
											<a href={post.author.href}>
												<span className='absolute inset-0' />
												{post.author.name}
											</a>
										</p>
										<p className='text-gray-600'>{post.author.role}</p>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
				{selectedPost && (
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						contentLabel='Example Modal'
						className='inset-0 flex relative max-h-[80%] justify-center items-center z-50 overflow-y-auto mx-4 my-12 top-12'
						overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-black/95 flex justify-center items-center z-40'
					>
						<div className='bg-white rounded-md p-4 mx-auto max-w-8xl px-6 lg:px-8 text-white relative overflow-y-auto max-h-[80vh]'>
							<button
								className='text-black absolute right-2 top-2 z-50'
								onClick={closeModal}
							>
								<XMarkIcon className='h-6 w-6' />
							</button>
							<div className='flex flex-col items-start justify-between'>
								<div className='relative mt-6'>
									<img
										src={selectedPost.imageUrl}
										alt=''
										className='max-h-96 w-full object-cover rounded-2xl'
									/>
									<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
								</div>
								<div className='max-w-xl'>
									<div className='mt-8 flex items-center gap-x-4 text-xs'>
										<time
											dateTime={selectedPost.datetime}
											className='text-gray-500'
										>
											{selectedPost.date}
										</time>
										<a
											href={selectedPost.category.href}
											className='relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
										>
											{selectedPost.category.title}
										</a>
									</div>
									<div className='group relative'>
										<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
											<a href='#'>
												<span className='absolute inset-0' />
												{selectedPost.title}
											</a>
										</h3>
										<p className='mt-5 text-sm leading-6 text-gray-600'>
											{selectedPost.description}
										</p>
									</div>
									<div className='relative mt-8 flex items-center gap-x-4'>
										<img
											src={selectedPost.author.imageUrl}
											alt=''
											className='h-10 w-10 rounded-full bg-gray-100'
										/>
										<div className='text-sm leading-6'>
											<p className='font-semibold text-gray-900'>
												<a href={selectedPost.author.href}>
													<span className='absolute inset-0' />
													{selectedPost.author.name}
												</a>
											</p>
											<p className='text-gray-600'>
												{selectedPost.author.role}
											</p>
										</div>
									</div>
								</div>
								{/* <h2 className='text-xl font-semibold'>{selectedPost.title}</h2>
								<p>{selectedPost.description}</p>
								{/* Tutaj możesz wyświetlić pozostałe informacje o artykule */}
							</div>
						</div>
					</Modal>
				)}
			</div>
		</div>
	);
};

export default Blog;
