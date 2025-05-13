import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LandingHero } from "@/app/components/LandingHero";

const title = "Eget consequat fringilla si posuere mus aenean";
const subTitle =
  "Mus elit dignissim nec dictumst egestas ultrices montes convallis eget si morbi donec consectetuer";
const image = "/playa.jpeg";

const { rerender } = render(
  <LandingHero title={title} subTitle={subTitle} image={image} />
);

test("renders the LandingHero component", async () => {
  expect(screen.getByRole("heading", { level: 1, name: title })).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: subTitle })
  ).toBeDefined();
});

test("renders the LandingHero with invalid email", async () => {
  rerender(<LandingHero title={title} subTitle={subTitle} image={image} />);

  const input = screen.getByRole("textbox") as HTMLInputElement;

  await userEvent.type(input, "test@test.c");
  await userEvent.click(screen.getByRole("button"));

  expect(screen.getByText("Please enter a valid email")).toBeDefined();
});

test("renders the LandingHero without email", async () => {
  rerender(<LandingHero title={title} subTitle={subTitle} image={image} />);

  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByText("Please enter a valid email")).toBeDefined();
});

test("renders the LandingHero with valid email", async () => {
  rerender(<LandingHero title={title} subTitle={subTitle} image={image} />);

  const input = screen.getByRole("textbox") as HTMLInputElement;

  await userEvent.clear(input);
  await userEvent.type(input, "test@test.com");

  await userEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button").innerHTML).toEqual("Submitting...");
  expect((screen.getByRole("button") as HTMLButtonElement).disabled).toEqual(
    true
  );
});
