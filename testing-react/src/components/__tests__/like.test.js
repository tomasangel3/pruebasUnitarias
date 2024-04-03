import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

test("Default value of likes is 0", ()=> {
  const { getByText } = render(<Like />);
  expect(getByText("Likes: 0")).toBeInTheDocument();
})

test("Click like button incrementa likes en 1", () => {
    const { getByText } = render(<Like />);
    const likeButton = getByText("Like");
    fireEvent.click(likeButton);
    const likesElement = getByText(/likes: (\d+)/i);
    const likes = parseInt(likesElement.textContent.match(/likes: (\d+)/i)[1]);
    expect(likes).toBe(1);
  });

test("Click dislike button decrece likes en 1", () => {
    const { getByText } = render(<Like />);
    const likeButton = getByText("Like");
    fireEvent.click(likeButton);
    const dislikeButton = getByText("Dislike");
    fireEvent.click(dislikeButton);
    const likesElement = getByText(/likes: (\d+)/i);
    const likes = parseInt(likesElement.textContent.match(/likes: (\d+)/i)[1]);
    expect(likes).toBe(0);
  });
  