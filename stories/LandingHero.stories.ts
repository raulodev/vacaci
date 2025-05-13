import type { Meta, StoryObj } from '@storybook/react';
import { LandingHero } from '@/app/components/LandingHero';
import playaImg from "../public/playa.png"

const meta = {
  title: 'LandingHero',
  component: LandingHero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

    title: { control: 'text' },
    subTitle: { control: 'text' },
    image: { control: 'text' },
    
  },
} satisfies Meta<typeof LandingHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Eget consequat fringilla si posuere mus aenean',
    subTitle: 'Mus elit dignissim nec dictumst egestas ultrices montes convallis eget si morbi donec consectetuer',
    image: playaImg.src,
  },
};