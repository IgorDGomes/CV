import { SVGProps } from "react";

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#pattern0_457_6)" d="M0 0H28V28H0z" />
      <defs>
        <pattern
          id="pattern0_457_6"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_457_6" transform="scale(.03125)" />
        </pattern>
        <image
          id="image0_457_6"
          width={32}
          height={32}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3UlEQVR4nO3UMUqDQRCG4e20EKxELDyIKUSP4R1SWEiOEQhYqohlGk/gEQKCKbWzSbT5KxGVR0SFdbNBEHYb94WpZj7mhR02hEZjCdjEJTpMsBNq4nN5zAxrNQU6i/RqCkyS5S/YqinQw+PX8lccVlv+Ddaxj+3w70Af46hOo944qT1sYIhbPGOOKxz8VeAiOcKHqJcywJ3lHJcW6PzObkmBmDd5TkoLDLCKFRxl+tclBaaZ/E0yc19S4CyTP09mnkoKjDL5UTpUUmCYyX/8CU3gB+0JQjvCRqMRFnkHu/kcAxZSh/YAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}
